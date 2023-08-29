from fastapi import FastAPI,Request,Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import HTMLResponse
from models.tokenmng import create_access_token,get_password_hash,verify_password
from config.db import dbadd_batch,dbadd_employee,user_collection,admin_collection

app = FastAPI()


app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


origin =["http://localhost:3000"]


app.add_middleware(
    CORSMiddleware,
    allow_origins  = origin,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)


@app.get("/")
def mydata_root():
    print("hello")
    return {"pradhumn":"hello pradhumn"}

 
@app.get("/admin")
async def admin_login():
    return {"admin bhau":"hello admin bhau"}




@app.post("/adminlog")
async def login_admin(form_data: OAuth2PasswordRequestForm = Depends()):
    # Check user credentials in the database
    user = await admin_collection.find_one({"username": form_data.username})
    print(user['username'])
    print(form_data.username)
    if user and verify_password(form_data.password, user["password"]):
        # Generate a new access token
        access_token = create_access_token(data={"sub": user["username"]})

        # Redirect URL after successful login
        redirect_url = f"/admin/{form_data.username}/home"

        # Return a response with a refresh meta tag for redirection
        response = HTMLResponse(content=f'<meta http-equiv="refresh" content="0;url={redirect_url}">', status_code=307)

        # Set the access token as a cookie
        response.set_cookie(key="access_token", value=access_token, httponly=True)
        return response

    else:
        error_page = templates.get_template("admin/login_error.html")
        return HTMLResponse(content=error_page.render(), status_code=401)
