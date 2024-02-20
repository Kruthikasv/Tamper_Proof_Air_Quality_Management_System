import numpy as np 
import pandas as pd 
import pickle
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

data = pd.read_csv('Final-dataset.csv') #import data 
data.drop(['From Date', 'To Date'],axis=1,inplace=True) 
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
data = data.replace(to_replace = np.NaN, value = 0)
def cal_SOi(so2):
    si=0
    if (so2<=40):
     si= so2*(50/40)
    elif (so2>40 and so2<=80):
     si= 50+(so2-40)*(50/40)
    elif (so2>80 and so2<=380):
     si= 100+(so2-80)*(100/300)
    elif (so2>380 and so2<=800):
     si= 200+(so2-380)*(100/420)
    elif (so2>800 and so2<=1600):
     si= 300+(so2-800)*(100/800)
    elif (so2>1600):
     si= 400+(so2-1600)*(100/800)
    return si
data['SO2']
data['SO2i']=data['SO2'].apply(cal_SOi)
df= data[['SO2','SO2i']]
def cal_Noi(no2):
    ni=0
    if(no2<=40):
     ni= no2*50/40
    elif(no2>40 and no2<=80):
     ni= 50+(no2-40)*(50/40)
    elif(no2>80 and no2<=180):
     ni= 100+(no2-80)*(100/100)
    elif(no2>180 and no2<=280):
     ni= 200+(no2-180)*(100/100)
    elif(no2>280 and no2<=400):
     ni= 300+(no2-280)*(100/120)
    else:
     ni= 400+(no2-400)*(100/120)
    return ni
data['NOi']=data['NO2'].apply(cal_Noi)
df= data[['NO2','NOi']]
def cal_pmi(pm2_5):
    pmi=0
    if(pm2_5<=30):
     pmi=pm2_5*(50/30)
    elif(pm2_5>30 and pm2_5<=60):
     pmi=50+(pm2_5-30)*(50/30)
    elif(pm2_5>60 and pm2_5<=90):
     pmi= 100+(pm2_5-60)*(100/30)
    elif(pm2_5>90 and pm2_5<=120):
     pmi=200+(pm2_5-90)*(100/30)
    elif(pm2_5>120 and pm2_5<=250):
     pmi=300+(pm2_5-120)*(100/130)
    else:
     pmi=400+(pm2_5-250)*(100/130)
    return pmi
data['PM25i']=data['PM2.5'].apply(cal_pmi)
def cal_pm10(pm10):
    pm10i = 0
    if(pm10<=50):
     pm10i= pm10*50/40
    elif(pm10>50 and pm10<=100):
     pm10i= 50+(pm10-40)*(50/40)
    elif(pm10>100 and pm10<=250):
     pm10i= 100+(pm10-80)*(100/100)
    elif(pm10>250 and pm10<=350):
     pm10i= 200+(pm10-180)*(100/100)
    elif(pm10>350 and pm10<=430):
     pm10i= 300+(pm10-280)*(100/120)
    else:
     pm10i= 400+(pm10-400)*(100/120)
    return pm10i
data['PM10i']=data['PM10'].apply(cal_pm10)
df= data[['PM10','PM10i']]
def cal_Ozone(oz):
    ozi = 0
    if(oz<=50):
     ozi= oz*50/50
    elif(oz>50 and oz<=100):
     ozi= 50+(oz-50)*(50/50)
    elif(oz>100 and oz<=168):
     ozi= 100+(oz-100)*(100/68)
    elif(oz>168 and oz<=208):
     ozi= 200+(oz-168)*(100/40)
    elif(oz>208 and oz<=748):
     ozi= 300+(oz-208)*(100/540)
    else:
     ozi= 400+(oz-748)*(100/540)
    return ozi
data['Ozonei']=data['Ozone'].apply(cal_Ozone)
df = data[['Ozone', 'Ozonei']]

def cal_NH3(nh):
    nhi = 0
    if(nh<=200):
     nhi= nh*50/200
    elif(nh>200 and nh<=400):
     nhi= 50+(nh-200)*(50/200)
    elif(nh>400 and nh<=800):
     nhi= 100+(nh-400)*(100/400)
    elif(nh>800 and nh<=1200):
     nhi= 200+(nh-800)*(100/400)
    elif(nh>1200 and nh<=1800):
     nhi= 300+(nh-1200)*(100/600)
    else:
     nhi= 400+(nh-1800)*(100/600)
    return nhi
data['NH3i']=data['NH3'].apply(cal_NH3)
df = data[['NH3', 'NH3i']]
def cal_CO(co):
    coi = 0
    if(co<=1.0):
     coi= co*50/1.0
    elif(co>1.0 and co<=2.0):
     coi= 50+(co-1.0)*(50/1.0)
    elif(co>2.0 and co<=10):
     coi= 100+(co-2)*(100/8)
    elif(co>10 and co<=17):
     coi= 200+(co-10)*(100/7)
    elif(co>17 and co<=34):
     coi= 300+(co-17)*(100/17)
    else:
     coi= 400+(co-34)*(100/17)
    return coi
data['COi']=data['CO'].apply(cal_CO)
df = data[['CO', 'COi']]

def cal_aqi(si,ni,pm25i,pm10i,ozi,nhi,coi):
    aqi=0
    if(si>ni and si>pm25i and si>pm10i and si>ozi and si>nhi and si>coi):
     aqi=si
    if(ni>si and ni>pm25i and ni>pm10i and ni>ozi and ni>nhi and ni>coi):
     aqi=ni
    if(pm25i>si and pm25i>ni and pm25i>pm10i and pm25i>ozi and pm25i>nhi and pm25i>coi):
     aqi=pm25i
    if(pm10i>si and pm10i>ni and pm10i>pm25i and pm10i>ozi and pm10i>nhi and pm10i>coi):
     aqi=pm10i
    if(ozi>si and ozi>ni and ozi>pm25i and ozi>pm10i and ozi>nhi and ozi>coi):
     aqi=ozi
    if(nhi>si and nhi>ni and nhi>pm25i and nhi>pm10i and nhi>ozi and nhi>coi):
     aqi=nhi
    if(coi>si and coi>ni and coi>pm25i and coi>pm10i and coi>nhi and coi>ozi):
     aqi=coi
    return aqi

data['AQI']=data.apply(lambda x:cal_aqi(x['SO2i'],x['NOi'],x['PM25i'],x['PM10i'],x['Ozonei'],x['NH3i'],x['COi']),axis=1)
df= data[['SO2i','NOi','PM25i','PM10i','Ozonei','NH3i','COi','AQI']]
def AQI_Range(x):
    if x<=50:
        return "Good"
    elif x>50 and x<=100:
        return "Satisfactory"
    elif x>100 and x<=200:
        return "Moderately Polluted"
    elif x>200 and x<=300:
        return "Poor"
    elif x>300 and x<=400:
        return "Very poor"
    elif x>400:
        return "Severe"

data['AQI_Range'] = data['AQI'] .apply(AQI_Range)
from sklearn import tree
model2 = tree.DecisionTreeClassifier()
X2 = data[['PM2.5','PM10','NO2','SO2','NH3','CO','Ozone']]
y2 = data['AQI_Range']
X_train2, X_test2, y_train2, y_test2 = train_test_split(X2, y2, test_size=0.33, random_state=42)
model2.fit(X_train2,y_train2)


pickle.dump(model2, open('hireable.pkl', 'wb'))
loaded_model = pickle.load(open('hireable.pkl', 'rb'))
result = loaded_model.score(X_test2, y_test2)

print(result)


