tabuada=int(input("De qual número você quer a tabuada? "))

for count in range(10):
    print("%d x %d = %d" % (tabuada, count+1, tabuada*(count+1))) #(%d) é um placeholder