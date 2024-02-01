import IsBrowser from "@/components/ui/is-browser";
import ResponsiveLayout from "./_components/responsive-layout";
import RentalForm from "@/components/rental-form";

export default function Home() {
  return (
    <IsBrowser>
      <ResponsiveLayout>
        <RentalForm />
      </ResponsiveLayout>
    </IsBrowser>

    // <Form/>
  );
}
