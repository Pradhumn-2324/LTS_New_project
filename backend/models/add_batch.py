from pydantic import BaseModel
from datetime import date




class Batch(BaseModel):
    batchName: str
    timing: str
    numStudents: str
    startDate: str
    admin_coursename: str




