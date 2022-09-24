import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegCreditCard, FaChalkboardTeacher } from "react-icons/fa";
import { Features, ImageWrapper, Title } from "../styles/AboutStyles";

export default function About() {
  return (
    <div>
      <p>
        Farmhub is a store for farm tools. We have a wide range of tools for you
        to choose from. We have tools for all kinds of farms, from small to
        large. We strive to bring farmers quality tools at affordable prices. It
        was established in 2021 to bridge the gap between farmers and quality
        tools.
      </p>
      <Title>What we offer</Title>
      <Features>
        <div>
          <TbTruckDelivery />
          <p>We deliver the products you ordered to your doorstep</p>
        </div>
        <div>
          <FaRegCreditCard />
          <p>Payments can be made with variety payments options available</p>
        </div>
        <div>
          <FaChalkboardTeacher />
          <p>We teach you how to use farm tools purchased on our platform</p>
        </div>
      </Features>
      <ImageWrapper>
        <Image
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Farm"
          width={720}
          height={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Farm"
          width={720}
          height={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Farm"
          width={720}
          height={500}
        />
      </ImageWrapper>
    </div>
  );
}
