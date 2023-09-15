import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  // useAccountResume,
  useFirstNameAndLastName,
  useIsLogged,
  useUpdateName,
} from "../app/Service";
import Account from "../components/Account";

const Profil = () => {
  const navigate = useNavigate();
  const isLogged = useIsLogged();
  const [renamedFirstName, setRenamedFirstName] = useState("");
  const [renamedLastName, setRenamedLastName] = useState("");
  const [isNameEdited, setIsNameEdited] = useState(false);
  const names = useFirstNameAndLastName();
  const updateName = useUpdateName();
  // const body = useAccountResume();

  useEffect(() => {
    if (!isLogged()) {
      navigate("/login");
    }
  });

  const toggleIsNameEdited = (e) => {
    setIsNameEdited(!isNameEdited);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (renamedFirstName === "") {
      setRenamedFirstName(names.firstName);
    }
    if (renamedLastName === "") {
      setRenamedLastName(names.lastName);
    }
    updateName(renamedFirstName, renamedLastName);
    toggleIsNameEdited(e);
  };

  const NameInputs = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="firstname-edit">Name</label>
      <input
        type="text"
        id="firstname-edit"
        placeholder={names.firstName}
        onChange={(e) => setRenamedFirstName(e.target.value)}
      />
      <label htmlFor="lastname-edit" />
      <input
        type="text"
        id="lastname-edit"
        placeholder={names.lastName}
        onChange={(e) => setRenamedLastName(e.target.value)}
      />
      <button className="edit-button" onClick={(e) => toggleIsNameEdited(e)}>
        Cancel
      </button>
      <input type="submit" className="edit-button" value="submit" />
    </form>
  );

  return (
    <main className="main bg-dark">
      <div className="header">
        {isNameEdited ? (
          NameInputs
        ) : (
          <div>
            <h1>
              Welcome Back <br />
              {names && names.firstName + " " + names.lastName}
            </h1>
            <button
              className="edit-button"
              onClick={(e) => toggleIsNameEdited(e)}
            >
              Edit Name
            </button>
          </div>
        )}
      </div>
      <Account />
    </main>
  );
};

export default Profil;
