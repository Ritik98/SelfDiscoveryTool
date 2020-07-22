import json
import requests
import sys
from PyDictionary import PyDictionary
dictionary=PyDictionary()
quality = open(sys.argv[1])
desc=''
temp= quality.readlines()
API_ENDPOINT  = 'Replace this with your API endpoint'
for x in range(len(temp)):
    line=temp[x].rstrip("\n")
    vals = line.split(sep=',' )
    name = vals[0]
    desc = vals[1]
    data = {"qualityName":name, "qualityDesc":desc}
    r = requests.post(API_ENDPOINT,data=json.dumps(data))

