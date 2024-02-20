# Importing necessary libraries

import uvicorn

import pickle

from pydantic import BaseModel

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
# Initializing the fast API server




app = FastAPI()


origins = [

    "http://localhost.tiangolo.com",

    "https://localhost.tiangolo.com",

    "http://localhost",

    "http://localhost:8080",

    "https://localhost:3000",

]

app.add_middleware(

    CORSMiddleware,

    allow_origins=origins,

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)
# Loading up the trained model

model = pickle.load(open('../model/hireable.pkl', 'rb'))
# Defining the model input types

class AQI(BaseModel):

    PM2_5: float
    PM10: float
    NO2: float
    SO2: float
    NH3: float
    CO: float
    Ozone: float
    # Setting up the home route

@app.get("/")
def read_root():

    return {"data": "Welcome to online employee hireability prediction model"}
@app.post("/prediction/")

async def get_predict(data: AQI):

    sample = [[

    data.PM2_5,

    data.PM10,

    data.NO2,

    data.SO2,

    data.NH3,

    data.CO,

    data.Ozone

    ]]
    AQI_cat = model.predict(sample).tolist()[0]

    return {

    "data": {

    'AQI_category': AQI_cat,

    }

    }
# Configuring the server host and port

if __name__ == '__main__':

    uvicorn.run(app, port=8080, host='localhost')
