#!/bin/sh

java -jar ./antlr-4.12.0-complete.jar -Xexact-output-dir -o ./parser -visitor -no-listener -Dlanguage=JavaScript -visitor -no-listener grammar/javascript/*.g4
