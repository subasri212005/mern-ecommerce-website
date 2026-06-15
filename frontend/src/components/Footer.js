export default function Footer() {
  return (
    <footer className="py-3 bg-dark text-light mt-5">
      <div className="container text-center">
        <p className="mb-1">
          <strong>MKSB SHOP</strong> - Your Online Shopping Destination
        </p>

        <p className="mb-1">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        <small className="text-muted">
          Built with MERN Stack (MongoDB, Express, React, Node.js)
        </small>
      </div>
    </footer>
  );
}