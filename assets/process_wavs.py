# import required module
import os

# assign directory
directory = os.getcwd()

# iterate over files in
# that directory
for filename in sorted(os.listdir(directory)):
  f = os.path.join(directory, filename)
  # checking if it is a file
  if os.path.isfile(f):

    just_the_file = f.split('/')[-1]

    if len(just_the_file.split('_')) > 1:
      movie = just_the_file.split('_')[0]
      print(just_the_file)
      clipname = just_the_file.split('_')[1].split('.mp3')[0]

      if clipname == 'wavs.py':
        continue
      if clipname == 'wavs.txt':
        continue

      # print the first part of Java code
      # the declared static variables
      # print('''public static final String {}_{} = "{} {}";'''.format(movie, clipname, movie[0], clipname))
      # <SoundButton emojiName='man' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
      # part1_text = '''\npublic static final String {}_{} = "{} {}";'''.format(movie, clipname, movie[0], clipname)
      part1_text = '''\n<SoundButton emojiName='{}' onPress={{() => this.playSound('{}_{}')}}></SoundButton>'''.format(clipname, movie, clipname)

      with open("part1_wavs.txt", "a") as myfile:
        myfile.write(part1_text)

# this for loop prints out the 2nd part of the Java code
# the additional calls to the functions for each clip
for filename in sorted(os.listdir(directory)):
  f = os.path.join(directory, filename)
  # checking if it is a file
  if os.path.isfile(f):
    # print(f)

    just_the_file = f.split('/')[-1]

    if len(just_the_file.split('_')) > 1:
      movie = just_the_file.split('_')[0]
      clipname = just_the_file.split('_')[1].split('.mp3')[0]

      if clipname == 'wavs.py':
        continue
      if clipname == 'wavs.txt':
        continue

      part2_text = '''\n'{}_{}': require('./assets/{}_{}.mp3'),'''.format(movie, clipname, movie, clipname)

      with open("part2_wavs.txt", "a") as myfile:
        myfile.write(part2_text)
