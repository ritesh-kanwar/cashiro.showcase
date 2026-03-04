import { EtherealShadow } from "@/components/ui/etheral-shadow";

const DemoOne = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center bg-background">
            <EtherealShadow
                color="rgba(0, 229, 160, 0.4)"
                animation={{ scale: 100, speed: 90 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
            />
        </div>
    );
};

export default function DemoPage() {
    return <DemoOne />;
}
