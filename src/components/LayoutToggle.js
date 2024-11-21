import React, { useState, useEffect } from "react";
const LayoutToggleWithRealData = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [files, setFiles] = useState([]);

  // Simulate fetching real data
  useEffect(() => {
    // Mock API data
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Document.docx", type: "Document", size: "15 KB", modified: "2024-11-20" },
        { id: 2, name: "Image.png", type: "Image", size: "2.3 MB", modified: "2024-11-18" },
        { id: 3, name: "Presentation.pptx", type: "Presentation", size: "5 MB", modified: "2024-11-15" },
        { id: 4, name: "Spreadsheet.xlsx", type: "Spreadsheet", size: "1.8 MB", modified: "2024-11-12" },
        { id: 5, name: "Video.mp4", type: "Video", size: "700 MB", modified: "2024-11-10" },
      ];
      setFiles(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container my-4">
      {/* Toggle Buttons */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className={`btn ${isGridView ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => setIsGridView(true)}
        >
          Grid Layout
        </button>
        <button
          className={`btn ${!isGridView ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setIsGridView(false)}
        >
          List Layout
        </button>
      </div>

      {/* Content Section */}
      {isGridView ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {files.map((file) => (
            <div key={file.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{file.name}</h5>
                  <p className="card-text">
                    <strong>Type:</strong> {file.type}
                    <br />
                    <strong>Size:</strong> {file.size}
                    <br />
                    <strong>Modified:</strong> {file.modified}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-group">
          {files.map((file) => (
            <li key={file.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{file.name}</h5>
                <small className="text-muted">
                  Type: {file.type} | Size: {file.size} | Modified: {file.modified}
                </small>
              </div>
              <button className="btn btn-outline-secondary btn-sm">View</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LayoutToggleWithRealData;
