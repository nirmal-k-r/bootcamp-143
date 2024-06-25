# import requests
# import json
# import time
# import asyncio
# url="https://api.chucknorris.io/jokes/random"

# async def get_joke():
#     return await requests.get(url).json()['value']
    

# async def main():
#     for i in range(30):
#         joke=await get_joke()
#         print(joke)


# if __name__ == "__main__":
#     start=time.time()
#     asyncio.run(main())
#     end=time.time()
#     print("Time taken: ",end-start,"s")

import requests
import json
import time
import threading
url="https://api.chucknorris.io/jokes/random"

def get_joke():
    joke = requests.get(url).json()['value']
    return joke

def main():
    for i in range(2500):
        print(f'{i}: {get_joke()}')


if __name__ == "__main__":
    start=time.time()
    for i in range(2500):
        threading.Thread(target=main).start()
    end=time.time()
    print("Time taken: ",end-start,"s")

