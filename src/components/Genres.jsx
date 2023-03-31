import { Container, Dropdown, Navbar } from "react-bootstrap";
import { FilterLeft, GridFill } from "react-bootstrap-icons";

const Genres = () => (
  <Container id="filters">
    <Navbar className="px-4alt py-2 justify-content-between">
      <div className="d-flex gap-5 align-items-center ">
        <h2 className="fw-bold text-light">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-white rounded-1">
            Generes
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" active>
              Action & Adventure
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Anime
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Children & Family{" "}
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Classic
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Comedies
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Documentaries
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Dramas
            </Dropdown.Item>

            <Dropdown.Item href="#" className="text-white">
              Horror
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Sports
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-white">
              Thrillers
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div id="filter-wrapper" class="d-flex align-items-center ">
        <span className="border border-light px-3 py-1">
          <FilterLeft color="white" size={20} />
        </span>
        <span className="border border-light px-3 py-1">
          <GridFill color="white" size={20} />
        </span>
      </div>
    </Navbar>
  </Container>
);
export default Genres;
