from time import sleep


def cd(*args, **kwargs):
    hrs = kwargs.get("hrs", 0)
    mins = kwargs.get("mins", 0)
    secs = kwargs.get("secs", 0)
    while hrs != 0 or mins != 0 or secs != 0:
        print("{h}h:{m}m:{s}s left to finish upload.".format(h = hrs, m = mins, s = secs), end='\r')
        sleep(1)
        if secs - 1 < 0:
            if mins - 1 < 0:
                if hrs - 1 < 0:
                    break
                else:
                    secs = 59
                    mins = 59
                    hrs -= 1
            else:
                secs = 59
                mins -= 1
        else:
            secs -= 1
    print("completed", end='\r')


cd(hrs = 9, mins = 53, secs = 32)
