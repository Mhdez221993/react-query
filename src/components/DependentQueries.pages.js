import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) =>
  axios.get(`http://localhost:4000/users/${email}`);

const fetchCoursesByChannel = (channelId) =>
  axios.get(`http://localhost:4000/channels/${channelId}`);

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const { data: coureses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannel(channelId),
    {
      enabled: !!channelId,
    }
  );

  return (
    <>
      <div>Denpendent Queries Page</div>
      {coureses?.data.course.map((course) => (
        <div>{course}</div>
      ))}
    </>
  );
};
