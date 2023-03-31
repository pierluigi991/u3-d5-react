import ProfileImg from "../img/kids_icon.png";
const Profile = (props) => (
  <main className="container text-secondary pb-5 text-bg-dark">
    <div className="row ">
      <div className="col-6 offset-3">
        <h1 className="display-1 border-bottom border-secondary mb-4">Edit Profile</h1>
        <div className="row mb-4">
          <div className="col-3 ">
            <img className="img-fluid" src={ProfileImg} alt="" />
          </div>
          <div className="col-8">
            <form>
              <div className="mb-3 pb-4 border-bottom border-secondary">
                <h2 className="bg-secondary text-dark p-2 mb-5">Strive Student</h2>
                <p className="mb-1 fs-4">Language:</p>
                <select
                  className="form-select bg-dark text-light fw-bold rounded-0 w-auto"
                  aria-label="Default select example"
                  defaultValue="1"
                >
                  <option value="1">English</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="border-bottom border-secondary mb-4"></div>
      </div>
    </div>
  </main>
);

export default Profile;
