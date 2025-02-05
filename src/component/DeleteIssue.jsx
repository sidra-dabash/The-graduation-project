function DeleteIssue() {
  const [issue, setIssue] = useState([]);
  const deleteIssue = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      setIssue((prev) => prev.filter((p) => p.id !== id));
      alert("success", "issue deleted successfully");
    } catch {
      alert("error", `Error deleting issue: ${error}`);
    }
  };
  return <></>;
}
export default DeleteIssue;
