import JsonData from "./data.json";

const Table = () => {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        {/* Name is not defined */}
        <td>{!info.name ? "Shailendra" : info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default Table;
