export default function LoadingSkeleton({ type = "text" }) {
    if (type === "card") {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 animate-pulse h-full">
                <div className="h-40 bg-gray-200 dark:bg-slate-800 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-5/6"></div>
            </div>
        );
    }

    if (type === "timeline") {
        return (
            <div className="flex gap-4 animate-pulse mb-8">
                <div className="w-12 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-800"></div>
                    <div className="flex-1 w-0.5 bg-gray-200 dark:bg-slate-800 my-2"></div>
                </div>
                <div className="flex-1 pt-1">
                    <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-1/4 mb-4"></div>
                    <div className="h-20 bg-gray-200 dark:bg-slate-800 rounded w-full"></div>
                </div>
            </div>
        );
    }

    // Default text line skeleton
    return (
        <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-5/6"></div>
        </div>
    );
}
