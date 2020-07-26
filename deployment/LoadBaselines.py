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
    data = {"qualityName":name, "qualityDesc":desc,"qualityCatg": "Baselines"}
    requests.post('https://la7dktbhq0.execute-api.ap-south-1.amazonaws.com/dev/baselines',data=json.dumps(data))
      

