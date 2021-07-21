import React from "react";
import Header from "@components/Header";
import "@assets/styles/Process.scss";

const Process = () => (
    <div className="process">
        <Header module="process" />
        <div className="process__title">
            <h1>How I did it</h1>
        </div>
        <div className="process__content">
            <p>
                My solution reach a O(n) time complexity since it starts from both sides and it goes
                to the center of the array. This time complexity is really necessary because to find the
                sum result of both sides of the array it's necessary to go through each number in the array.
            </p>
            <br/>
            <p>
                I defined two important variables that I called leftIndex and rightIndex, those variables
                will take the order of the sum. The criteria to know the algorithm has finished is when the
                leftIndex is grater than the rightIndex or also if both indexes are the same one and the
                partial sum of both sides of the array represents the same value.
            </p>
            <br/>
            <p>
                Every iteration of the algorithm validate the partial sum of each side and when one of the
                partial sum is less than the another one then that side should move forward one index and add
                a new number. What it does is try to take both sum value results similar until the indexes
                find the middle where both sums are equal.
            </p>
            <br/>
            <p>
                Since the values that are stored are limited and they don't depend on the input size, then the
                algorithm reach a constant O(1) space complexity which is the best complexity to reach.
            </p>
        </div>
    </div>
);

export default Process;