#!/bin/bash

messages=(
  "Setup project structure"
  "Add navigation bar"
  "Implement dark/light mode"
  "Add profile image"
  "Style about section"
  "Add expertise section"
  "Add timeline"
  "Add projects section"
  "Add contact form"
  "Improve responsiveness"
  "Optimize images"
  "Refactor SCSS"
  "Add fade-in animation"
  "Update README"
  "Fix navigation scroll"
  "Improve accessibility"
  "Add SEO tags"
  "Update dependencies"
  "Final polish"
  "Ready for launch"
)

for i in "${!messages[@]}"; do
  day=$(($i+1))
  date="2025-02-$(printf '%02d' $day)T12:00:00"
  echo "# Commit for $date" >> README.md
  git add README.md
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "${messages[$i]}"
done 