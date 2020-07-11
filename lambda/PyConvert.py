import json
import requests
import sys
from PyDictionary import PyDictionary
dictionary=PyDictionary()
quality = open(sys.argv[1])
desc=''
temp= quality.readlines()
for x in range(len(temp)):
    name=temp[x].rstrip("\n")
    try:
        meaning = dictionary.meaning(name)
        for x in meaning.values():
            desc=x[0]
    except:
        desc=""
    data = {"qualityName":name, "qualityDesc":desc}
    r = requests.post('https://cn80zv9qg7.execute-api.ap-south-1.amazonaws.com/dev',data=json.dumps(data))   
