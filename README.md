# Make the AI Judge Laugh — Family Means Toppings, Not Money

[![make.fun · u-alfasurya91-make-the-ai-judge-laugh-6ed40225](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ajx/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ajx/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

> My boss calls us a family, so I asked for a raise — HR replied with a pizza party invite, because in this family love means toppings, not money.

**144 characters** — one line, well inside the 200-character gate.

## About

This entry is a single one-liner for the make.fun competition "Make the AI Judge Laugh". The program writes exactly one funny line about office life to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and an AI judge compares entries two at a time, weighing them in this order: a true observation about office life, a surprising turn, tight wording, and freshness.

The joke's turn is the gap between the words and the reward: the boss calls the team "a family", the raise request is answered with a pizza party invite, and the punch lands on the last three words — love means toppings, not money.

## How it runs

```sh
node main.ts
```

No dependencies, no network, no disk reads beyond its own source. It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `./output`), and refuses to write anything outside the gate: 1–200 characters, a single line, not only whitespace — the program checks its own line against those limits before writing.

## License

MIT
