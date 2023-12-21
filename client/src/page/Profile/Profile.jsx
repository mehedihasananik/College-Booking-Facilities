import React, { useContext, useRef } from "react";
import Container from "../../components/Shared/Navbar/Container/Container";
import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from "../../api/auth";
import toast from "react-hot-toast";
import InfoProfile from "./InfoProfile";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);

  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const university = e.target.university.value;
    const address = e.target.address.value;

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGDB
    }`;
    // Upload the image to a remote server
    const imageResponse = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const imageData = await imageResponse.json();
    const imageUrl = imageData?.data?.display_url;

    await updateUserProfile(name, imageUrl);
    const saveInfo = {
      name,
      photoURL: imageUrl,
      address,
      university,
    };

    const response = await fetch(
      `https://server-virid-nine.vercel.app/users/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveInfo),
      }
    );
    if (response.ok) {
      toast.success("updated");
    }
    modalRef.current.close();
  };

  return (
    <Container>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img src={user?.photoURL} className="w-96 rounded-lg shadow-2xl" />
          </div>
          <div>
            <InfoProfile user={user} loading={loading} />
            <button
              onClick={() => modalRef.current.showModal()}
              className="btn btn-primary"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <dialog ref={modalRef} id={`my_modal_`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={(e) => handleSubmit(e)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">University</span>
                </label>
                <input
                  name="university"
                  type="text"
                  placeholder="Enter Your University"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Enter Your Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </Container>
  );
};

export default Profile;
