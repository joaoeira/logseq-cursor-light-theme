# Cursor Light for Logseq

A standalone Logseq theme adapted from Cursor Light v1.0.0. It uses Cursor's
actual editor, chrome, text, interaction, and syntax colors while mapping them
onto both Logseq's classic variables and its current DB-version component
tokens. It deliberately does not set a font family or alter block-editor
geometry, so Logseq's typography preferences and native editing surface remain
intact.

The theme also includes a small compatibility layer for Horizontal Panes:
editor panes use Cursor's `#fcfcfc` editor surface, the infinite strip uses its
`#f3f3f3` chrome, and pane focus uses Cursor's neutral focus border.

## Local installation

In Logseq, open **Plugins**, choose **Load unpacked plugin**, and select this
directory. Then choose **Cursor Light** under **Settings → Themes**.

Run `npm test` to verify that the manifest, core Logseq tokens, and Cursor
palette are intact.

## Palette source

The palette was adapted from:

`/Applications/Cursor.app/Contents/Resources/app/extensions/theme-cursor/themes/cursor-light-color-theme.json`

No Cursor application code or artwork is included.
