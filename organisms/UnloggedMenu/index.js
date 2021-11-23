import Style from './Style';

const TriangleButton = (props) =>{
  const { direction, href, labelLink } = props;
  return (
    <Style.TriangleContainer>
      <Style.Triangle direction={direction} />
      <Style.AnchorCreate href={href}>
        {labelLink}
      </Style.AnchorCreate>
    </Style.TriangleContainer>
  )
}

export default function HomePage() {
  return (
    <>
      <Style.Container>
        <TriangleButton direction="left" labelLink="CRIAR" href="/login/pf"/>
        <Style.MainText>
          HOJE VOCÊ IRÁ
        </Style.MainText>
        <TriangleButton direction="right" labelLink="INVESTIR" href="/login/pj"/>
      </Style.Container>
      <Style.Footer>
        YOUR IDEA INSIDE
      </Style.Footer>
    </>
  )
}
