import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  headerFontFamily: ['Open Sans', 'sans-serif'],
  baseFontFamiy: ['Gentium Book Basic', 'serif'],
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  blockMarginBottom: 0.65,
  scaleRatio: 2.15,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      h2: {
        marginTop: rhythm(2),
      },
      a: {
        color: 'inherit',
      },
      'tt,code': {
        background: 'hsla(23, 60%, 97%, 1)',
        fontFamily: '"Space Mono",Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',
        fontSize: '80%',
        fontVariant: 'none',
        WebkitFontFeatureSettings: '"clig" 0, "calt" 0',
        fontFeatureSettings: '"clig" 0, "calt" 0',
        paddingTop: '0.1em',
        paddingBottom: '0.1em',
      },
      p: {
        lineHeight: 1.7,
        fontSize: '1.1em',
        marginBottom: rhythm(1),
      },
      blockquote: {
        display: 'block',
        width: '100%',
        borderLeft: '3px #999 solid',
        padding: '1em 0 1em 1em',
        marginLeft: '0',
      },
    }
  },
}

const typography = new Typography(options)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
