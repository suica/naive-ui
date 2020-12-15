import { c, cTB, cB, cM } from '../../../_utils/cssr'

export default c([
  ({ props }) => {
    const {
      $local: {
        olPadding,
        ulPadding,
        liFontSize,
        liMargin,
        liLineHeight,
        liTextColor
      },
      $global: {
        cubicBezierEaseInOut
      }
    } = props
    return [
      cTB('ol', {
        fontSize: liFontSize,
        padding: olPadding
      }, [
        cM('align-text', {
          paddingLeft: 0
        }),
        cB('li', {
          color: liTextColor
        })
      ]),
      cTB('ul', {
        fontSize: liFontSize,
        padding: ulPadding
      }, [
        cM('align-text', {
          paddingLeft: 0
        }),
        cB('li', {
          margin: liMargin,
          color: liTextColor
        })
      ]),
      cB('li', {
        transition: `color .3s ${cubicBezierEaseInOut}`,
        lineHeight: liLineHeight,
        marginBottom: 0
      })
    ]
  }
])
