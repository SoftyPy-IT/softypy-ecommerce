import Container from '../shared/Container'
import SectionTitle from '../shared/SectionTitle'
import DemoProjects from './DemoProjects'

export default function Projects() {
  return (
    <section>
      <Container>
        <SectionTitle align='center' title='Our Projects' subtitle='Build Powerful Digital Experiences' />
        <DemoProjects />
      </Container>
    </section>
  )
}
