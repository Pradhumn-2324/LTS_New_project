from pydantic import BaseModel
from datetime import date


class AdminLog(BaseModel):
    username : str
    password : str


class Employee(BaseModel):
    empid: str 
    empname: str 
    empgender: str 
    empcontactno: str 
    emergencycontact: str 
    empemail: str 
    empaddress: str 
    empdob: str
    emppassword1: str 
    emppassword2: str 
    empdesignation: str
    emptype: str 
    empjoiningDate: str
    empgridcheck1: str


