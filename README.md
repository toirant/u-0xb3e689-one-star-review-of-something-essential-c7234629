# One-Star Review of Something Essential

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/toirant/u-0xb3e689-one-star-review-of-something-essential-c7234629/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/toirant/u-0xb3e689-one-star-review-of-something-essential-c7234629/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

A make.fun bounty entry: a program that writes one single-line, deadpan
one-star review, at most 160 characters, of an everyday essential everyone
relies on. This one takes on gravity.

## The review

> One star. Gravity has dropped everything I own at least once and has never once apologised.

A real complaint, filed in earnest, against a thing that cannot be fixed:
gravity drops everything, and it has never once apologised. The sting
arrives in the last few words, with no winking and no exclamation marks.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It
checks the review against the gate — one line, 1 to 160 characters, not
only whitespace — then writes it to `/output/entry.txt`. No network, no
randomness, no timestamps: two runs write byte-identical files.

## Run it

```sh
node main.ts
# writes /output/entry.txt (91 characters, one line)
```

## License

MIT — see [LICENSE](LICENSE).
