// import { Layout, Menu, Table, Skeleton } from "antd";
// import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { useState, useEffect } from "react";
// import axiosInstance from "@/utils/axios";

// const { Header, Sider, Content } = Layout;

// const AdminDashboard = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const [selectedMenu, setSelectedMenu] = useState("users");
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         fetchData(selectedMenu);
//     }, [selectedMenu]);

//     const fetchData = async (type) => {
//         setLoading(true);
//         try {
//             let response;
//             if (type === "users") {
//                 response = await axiosInstance.get("/user/getallusers");
//             } else if (type === "products") {
//                 response = await axiosInstance.get("/product/getallproducts");
//             }
//             setData(response.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };


//     const columns = {
//         users: [
//             { title: "Name", dataIndex: "name", key: "name" },
//             { title: "Email", dataIndex: "email", key: "email" },
//             { title: "Phone", dataIndex: "phone", key: "phone" },
//         ],
//         products: [
//             { title: "Product Name", dataIndex: "name", key: "name" },
//             { title: "Weight", dataIndex: "weight", key: "weight" },
//             { title: "Price", dataIndex: "price", key: "price" },
//         ],
//     };

//     const menuItems = [
//         {
//             key: "users",
//             icon: <UserOutlined />,
//             label: "Users",
//         },
//         {
//             key: "products",
//             icon: <ShoppingCartOutlined />,
//             label: "Products",
//         },
//     ];

//     return (
//         <Layout style={{ minHeight: "100vh" }}>
//             <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
//                 <h1 className="text-xl justify-center p-4 text-center">Admin Dashboard</h1>
//                 <Menu
//                     theme="dark"
//                     mode="inline"
//                     selectedKeys={[selectedMenu]}
//                     onClick={(e) => setSelectedMenu(e.key)}
//                     items={menuItems}
//                 />
//             </Sider>
//             <Layout>
//                 <Content style={{ margin: "20px", padding: 20, background: "#fff" }}>
//                     <h2 className="text-2xl font-bold">{selectedMenu === "users" ? "Users" : "Products"} Table</h2>
//                     {loading ? (
//                         <Skeleton active paragraph={{ rows: 4 }} />
//                     ) : (
//                         <Table dataSource={data} columns={columns[selectedMenu]} rowKey="id" />
//                     )}
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };

// export default AdminDashboard;


import { Layout, Menu, Table, Skeleton } from "antd";
import { UserOutlined, ShoppingCartOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axios";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("users");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
            // Auto collapse on small screens
            if (window.innerWidth <= 768) {
                setCollapsed(true);
            }
        };

        // Initial check
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        fetchData(selectedMenu);
    }, [selectedMenu]);

    const fetchData = async (type) => {
        setLoading(true);
        try {
            let response;
            if (type === "users") {
                response = await axiosInstance.get("/user/getallusers");
            } else if (type === "products") {
                response = await axiosInstance.get("/product/getallproducts");
            }
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const columns = {
        users: [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Email", dataIndex: "email", key: "email" },
            { title: "Phone", dataIndex: "phone", key: "phone" },
        ],
        products: [
            { title: "Product Name", dataIndex: "name", key: "name" },
            { title: "Weight", dataIndex: "weight", key: "weight" },
            { title: "Price", dataIndex: "price", key: "price" },
        ],
    };

    const menuItems = [
        {
            key: "users",
            icon: <UserOutlined />,
            label: "Users",
        },
        {
            key: "products",
            icon: <ShoppingCartOutlined />,
            label: "Products",
        },
    ];

    return (
        <Layout className="min-h-screen">
            {/* Sidebar - Hidden by default on mobile/tablet */}
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                collapsedWidth={isMobile ? 0 : 80}
                className={`${isMobile ? 'fixed left-0 z-10 h-screen' : 'relative'}`}
                trigger={null}
                breakpoint="md"
                width={200}
            >
                <div className="flex justify-between items-center p-4 pb-4.5   text-xl border-r-2  border-white">
                    <span className={collapsed && !isMobile ? "hidden" : "block"} style={{ borderBottom: "1px solid #fff" }}>Admin Dashboard</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    onClick={(e) => {
                        setSelectedMenu(e.key);
                        // Auto-collapse sidebar after selection on mobile
                        if (isMobile) {
                            setCollapsed(true);
                        }
                    }}
                    items={menuItems}
                    className="text-base "
                />
            </Sider>

            {/* Backdrop for mobile sidebar */}
            {isMobile && !collapsed && (
                <div
                    className="fixed inset-0  backdrop-blur-sm bg-opacity-50 z-[5]"
                    onClick={() => setCollapsed(true)}
                />
            )}

            {/* Main Content */}
            <Layout>
                <Header className="bg-white shadow-md p-4 flex justify-between items-center ">
                    {isMobile && (
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="text-lg text-white"
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </button>

                    )}
                    <h2 className="text-xl font-semibold text-white">
                        {selectedMenu === "users" ? "Users" : "Products"}
                    </h2>
                    <div className="w-6"></div>
                </Header>

                <Content className="m-4 p-4 bg-white rounded-lg shadow-md h-screen">
                    <h2 className="text-2xl font-bold mb-4">
                        {selectedMenu === "users" ? "Users" : "Products"} Table
                    </h2>

                    {loading ? (
                        <Skeleton active paragraph={{ rows: 4 }} />
                    ) : (
                        <div className="overflow-x-auto">
                            <Table
                                dataSource={data}
                                columns={columns[selectedMenu]}
                                rowKey="id"
                                pagination={{
                                    pageSize: isMobile ? 5 : 10,
                                    size: isMobile ? "small" : "default"
                                }}
                                scroll={{ x: "max-content" }}
                                size={isMobile ? "small" : "middle"}
                            />
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;