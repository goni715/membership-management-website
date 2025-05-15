import Loading from "@/Components/shared/Loading";
import { useGetNotificationsQuery } from "@/redux/features/auth/dashboardApi";
import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetNotificationsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  const notifications = data?.notifications || [];

  return (
    <div className="text-white container mx-auto pb-5">
      <p className="text-center text-4xl font-semibold pt-10">{t("notificationsTitle")}</p>
      <p className="text-center mt-2 mb-20">{t("breadcrumbHomeNotification")}</p>

      {notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note._id}
              className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 border-b border-[#5C5C5C] bg-[#1e1e1e] rounded-md"
            >
              <div>
                <p className="text-lg font-semibold text-[#22A59A]">
                  {note.title}
                </p>
                <p className="text-sm text-gray-300">{note.description}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2 md:mt-0">
                {moment(note.createdAt).format("DD MMM YYYY [at] h:mm A")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-500 py-10">
          <p>{t("noNotifications")}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
