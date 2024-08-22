class AnagramChecker:
    def __init__(self):
        self.words=[]
        self.load_word_list()


    def load_word_list(self):
        try:
            with open("wordList.txt") as file:
                for line in file:
                    word=line.strip()
                    word=word.lower()
                    self.words.append(word) 
        except:
            print("Error loading word list")

    def is_valid_word(self,word):
        return word in self.words
    
    def is_anagram(self,word1, word2):
        word1=word1.lower()
        word2=word2.lower()

        return sorted(word1)==sorted(word2)

    def get_anagram(self,word):
        anagrams=[]
        word=word.lower()

        for w in self.words:
            if self.is_anagram(w,word):
                anagrams.append(w)

        return anagrams
    