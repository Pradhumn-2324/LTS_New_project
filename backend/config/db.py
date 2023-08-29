from motor.motor_asyncio import AsyncIOMotorClient
from models.admin_login import Employee
from models.add_batch import Batch
from models.tokenmng import get_password_hash



MONGODB_URL = ("mongodb://localhost:27017/")
conn = AsyncIOMotorClient(MONGODB_URL)
db = conn["Pradhumn_LTS"]
admin_collection = db["Admin_cred"]
employee_collection = db["Employee_details"]
user_collection=db["User_cred"]
user_collection=db["add_batch"]







async def dbadd_employee(employee : Employee):
    employee_data = employee.dict()
    inserted_employee = await employee_collection.insert_one(employee_data)
    data={"username":employee.empemail,"password":get_password_hash(employee.emppassword1)}
    if employee.empdesignation == "admin":
        inserted_employee = await admin_collection.insert_one(data)
    else:
        inserted_employee = await user_collection.insert_one(data)
    # Insert the employee data into MongoDB

    return {"message": f"Employee with ID {inserted_employee.inserted_id} added successfully"}


async def dbadd_batch(batch : Batch):
    data={"batchName": batch.batchName, "timing": batch.timing, "numStudents": batch.numStudents, "startDate": batch.startDate}
    insert = await user_collection.insert_one(data)
    print("ishant")
    return {"message": f"addbatch with ID {insert.inserted_id} added successfully"}
async def fetch_employee_data():
    employees = []
    async for document in employee_collection.find():
        employee = Employee(**document)
        employees.append(employee)
    return employees
