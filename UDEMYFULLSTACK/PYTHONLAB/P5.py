class ATM:
    def __init__(self, balance):
        self.balance = balance   # data member

    def check_balance(self):
        print("Current Balance:", self.balance)

    def deposit(self, amount):
        self.balance += amount
        print("Deposited:", amount)

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Withdrawn:", amount)
        else:
            print("Insufficient Balance")


# Main program
atm = ATM(5000)   # object creation with initial balance

atm.check_balance()
atm.deposit(2000)
atm.withdraw(3000)
atm.check_balance()
