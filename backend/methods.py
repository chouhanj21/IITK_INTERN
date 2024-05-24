def printall(cur):
    rows = cur.fetchall()
    for row in rows:
        print(row)