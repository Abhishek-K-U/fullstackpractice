#Method overloading
class A:
    def add(self,a,b=2,c=0):
        print(a+b+c)
ob=A()
ob.add(10,20,30)
ob.add(70,30)
#Method overriding
class A:
     def disp(self):
        print("Hello Sam")
class B(A):
    def disp(self):
        print("Welcome to python course")

ob=B()
ob.disp()
#Operator Overloading
class Demo:
    def __init__(self, value1):
        self.value1 = value1

    def __add__(self, value2):
        return self.value1 + value2.value1

# Integer addition
a = Demo(10)
b = Demo(20)
print(a + b)

# String concatenation
c = Demo("Hello ")
d = Demo("World")
print(c + d)
