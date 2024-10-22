import Swal from "sweetalert2";

export async function makePostRequest(setloading, endpoint, data, reset) {
  try {
    setloading(true);
    const baseUrl = `http://localhost:3000`;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setloading(false);
      Swal.fire({
        icon: 'success',
        text: 'Successfully created'
      });
      reset();
    } else {
      setloading(false);
      const errorData = await response.json();
      Swal.fire({
        icon: "error",
        text: errorData.message || "Unsuccessful",
      });
    }
  } catch (error) {
    setloading(false);
    Swal.fire({
      icon: "error",
      text: error.message || "Unsuccessful",
    });
    // console.log(error);
  }
}

export async function makePutRequest(setloading, endpoint, redirect, data) {
  try {
    setloading(true);
    const baseUrl = `http://localhost:3000`;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setloading(false);
      Swal.fire({
        icon: 'success',
        text: 'Successfully updated'
      });
      redirect();
    } else {
      setloading(false);
      const errorData = await response.json();
      Swal.fire({
        icon: "error",
        text: errorData.message || "Unsuccessful",
      });
    }
  } catch (error) {
    setloading(false);
    Swal.fire({
      icon: "error",
      text: error.message || "Unsuccessful",
    });
    // console.log(error);
  }
}
