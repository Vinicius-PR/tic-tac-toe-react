import { GridCell, GridContainer } from "./styles";
import xImg from '../../../../assets/icon-x.svg'
import oImg from '../../../../assets/icon-o.svg'

export default function Grid() {
  return (
    <GridContainer>

      <GridCell>
        <img src={xImg} alt="X" />
      </GridCell>

      <GridCell>
        <img src={xImg} alt="X" />
      </GridCell>

      <GridCell>
        <img src={oImg} alt="O" />
      </GridCell>

      <GridCell>
        <img src={oImg} alt="O" />
      </GridCell>

      <GridCell>
        <img src={oImg} alt="O" />
      </GridCell>

      <GridCell>
        <img src={oImg} alt="O" />
      </GridCell>

      <GridCell>
        <img src={oImg} alt="O" />
      </GridCell>

      <GridCell>
        <img src={xImg} alt="X" />
      </GridCell>

      <GridCell>
        <img src={xImg} alt="X" />
      </GridCell>

    </GridContainer>
  )
}
