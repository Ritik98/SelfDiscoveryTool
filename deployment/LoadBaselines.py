import json
import requests
import sys
from PyDictionary import PyDictionary
dictionary=PyDictionary()
quality = open(sys.argv[1])
desc=''
temp= quality.readlines()
API_ENDPOINT  = 'YOUR API ENDPOINT'
for x in range(len(temp)):
    line=temp[x].rstrip("\n")
    vals = line.split(sep=',' )
    name = vals[0]
    desc = vals[1]
    data = {"category":"Baselines" , "property":name, "description":desc}
    listToStr = ','.join([str(elem) for elem in data.values()])
    #print(listToStr)    
    r = requests.post(API_ENDPOINT,data=json.dumps(data))
