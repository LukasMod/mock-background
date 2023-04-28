// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"

const randomRGBA = () => {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let a = 0.4
  return `"rgba(${r}, ${g}, ${b}, ${a})"`
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.generateRgbaString",
    () => {
      const editor = vscode.window.activeTextEditor

      if (editor) {
        const position = editor.selection.active

        editor.edit((builder) => {
          builder.insert(position, randomRGBA())
        })
      }
    }
  )

  context.subscriptions.push(disposable)

  let disposable2 = vscode.commands.registerCommand(
    "extension.generateRgbaBackgroundColor",
    () => {
      const backgroundColorStyleProp = `backgroundColor: ${randomRGBA()}`
      // Get the active text editor
      const editor = vscode.window.activeTextEditor

      if (editor) {
        const position = editor.selection.active

        editor.edit((builder) => {
          builder.insert(position, backgroundColorStyleProp)
        })
      }
    }
  )

  context.subscriptions.push(disposable2)
}

// This method is called when your extension is deactivated
export function deactivate() {}

