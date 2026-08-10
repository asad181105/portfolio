import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { isAdminConfigured } from "@/lib/admin-auth";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Admin",
  description: "Admin dashboard for contact submissions.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return <AdminDashboard configured={isAdminConfigured()} />;
}
