from card import Card

import random

class Deck:
    def __init__(self,id):
        self.id=id
        self.cards=[]
        self.populate()
        self.shuffle()

    def populate(self):
        suits=['Hearts','Diamonds','Clubs','Spades']
        values=['2','3','4','5','6','7','8','9','10','J','Q','K','A']

        for suit in suits:
            for value in values:
                newCard=Card(suit,value)
                self.cards.append(newCard)
        # print(f'Deck {self.id} populated with {len(self.cards)} cards')

    def shuffle(self):
        random.shuffle(self.cards)

    def draw(self):
        return self.cards.pop()
    
    def details(self):
        print("\n".join([str(card) for card in self.cards]))


    def __str__(self):
        return (f'Deck {self.id} has {len(self.cards)} cards')


