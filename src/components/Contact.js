const Contact = () => {
  return (
    <div className="w-6/12 m-auto text-center ">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page </h1>
      <div className="bg-gray-100  p-5 w-[320px] m-auto rounded-lg shadow-lg">
        <form>
          <div>
            <input
              type="text"
              className="border border-black p-2 m-2 rounded-lg"
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="text"
              className="border border-black p-2 m-2 rounded-lg"
              placeholder="message"
            />
          </div>
          <button className="bg-green-200 m-4 px-4 py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
