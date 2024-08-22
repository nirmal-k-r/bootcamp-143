from anagram_checker import AnagramChecker

ac=AnagramChecker()


while True:
    
    user_input=input("Enter a word: ")

    if user_input=="exit":
        break
    else:
        if ac.is_valid_word(user_input):
            anagrams=ac.get_anagram(user_input)
            print(f"Anagrams for {user_input}: {anagrams}")
        else:
            print(f"{user_input} is not a valid word")
