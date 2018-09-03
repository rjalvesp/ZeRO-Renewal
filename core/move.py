from datetime import date
from argparse import ArgumentParser
from os import path, listdir, walk, makedirs
from shutil import copyfile

# Directory Set Up
parser = ArgumentParser()
parser.add_argument("--path")
args = parser.parse_args()

myPath = path.realpath('.')
destinationPath = path.realpath(args.path)

if date.today().isoweekday() <= 5:
    prepath = 'init'
    paths = [
        'conf\\battle',
        'conf\\import',
        'conf\\import-tmpl',
        'npc'
    ]
else:
    
    prepath = 'weekend'
    paths = [
        'conf/battle',
    ]


# Counter Set Up (Optional)
total = 0
count = 0

for i in paths:
    tmpPath = path.join(myPath, prepath, i)
    for (dirpath, dirnames, filenames) in walk(tmpPath):
        for file in filenames:
            total += 1


# Copy
for i in paths:
    ## Path set up
    tmpPath = path.join(myPath, prepath, i)
    tmpDestinationPath = path.join(destinationPath, i)
    ## path check up
    if not path.exists(tmpDestinationPath):
        makedirs(tmpDestinationPath)
    
    ## path copy
    for (dirpath, dirnames, filenames) in walk(tmpPath):
        for file in filenames:
            filepath = path.join(dirpath, file)
            fileDestinationPath = path.join(tmpDestinationPath, file)
            copyfile(filepath, fileDestinationPath)
            count += 1
            print('[%d/%d]' % (count, total) )

exit(0)
            