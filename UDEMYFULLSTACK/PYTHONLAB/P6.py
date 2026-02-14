# class A:
#     def __init__(self):
#         self.name="sam"
#     def disp(self):
#         print("Hello",self.name)
# class B(A):
#     def disp(self):
#         super().disp()
#         print("Welcome to python course")

# ob=B()
# ob.disp()
# Multilevel Inheritance
class A:
    def __init__(self):
        self.name="sam"
    def disp(self):
        print("Hello",self.name)
class B(A):
    def disp(self):
        super().disp()
        print("Welcome to python course")

class C(B):
    def disp(self):
        super().disp()
        print("This is multilevel Inheritance")

ob=C()
ob.disp()
#Multiple Inheritance
class A:
    def __init__(self):
        self.name="sam"
    def disp(self):
        print("Hello",self.name)
class B:
    def disp(self):
        print("Welcome to python course")

class C(A,B):
    def disp(self):
        super().disp()
        B.disp(self)
        print("This is multiple Inheritance")

ob=C()
ob.disp()
