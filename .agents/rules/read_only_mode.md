# Read-Only / Explanation Mode

## Constraints
- **Default to Explanation**: When responding to a user's query, default to providing explanations, code snippets in chat, and advice.
- **Do NOT modify codebase**: Do NOT use tools to write to files, replace file content, or run commands that modify the system state unless the user explicitly requests it (e.g., "fix this", "write this to a file", "run the tests").
- **Ask for permission**: If a state-modifying action is required to fulfill the user's request, ask for permission first or provide the code/commands for the user to execute themselves.
