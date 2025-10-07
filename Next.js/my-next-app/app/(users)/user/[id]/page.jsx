import  db  from "@/config/db";
import { Mail, Phone, MapPin, Calendar, Award, User as UserIcon } from "lucide-react";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment

// export async function generateStaticParams() {
//   const [doctors] = await db.execute(`select doctor_id from doctors`);
//   return doctors.map((doctor) => ({ id: doctor.doctor_id.toString() }));
// }

// [
//   { id: "1" },
//   { id: "2" },
//   { id: "3" }
// ]

const SingleUser = async (props) => {
  const params = await props.params;
  console.log("params:", params);

  // Fetch user data from MySQL
  const [[user]] = await db.execute(`SELECT * FROM users WHERE id = ?`, [params.id]);
  console.log("🚀 ~ SingleUser ~ user:", user);

  if (!user) return notFound();

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get initials
  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(user.first_name, user.last_name)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-blue-100 text-sm">{user.role || "User"}</p>
              <div className="flex items-center mt-1">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    user.is_active ? "bg-green-300" : "bg-red-300"
                  }`}
                ></div>
                <span className="text-xs">
                  {user.is_active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">{user.phone}</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-600">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <div className="text-sm">
                <div>{user.address}</div>
                <div>
                  {user.city}, {user.state} {user.postal_code}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Professional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="text-sm font-medium">
                  {user.experience_years || 0} years
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">User ID</div>
                <div className="text-sm font-medium">{user.id}</div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <div>
                <div className="text-xs text-gray-500">Joined</div>
                <div className="text-sm font-medium">
                  {user.joining_date ? formatDate(user.joining_date) : "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="text-xs text-gray-500">
            ID: {user.id} • Born:{" "}
            {user.date_of_birth ? formatDate(user.date_of_birth) : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
